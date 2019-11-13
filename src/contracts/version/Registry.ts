import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { RegistryAbi } from '../../abis/Registry.abi';
import { Environment } from '../../Environment';
import BigNumber from 'bignumber.js';
import { utf8ToHex, hexToBytes } from 'web3-utils';
import { ValidationError } from '../../errors/ValidationError';
import { toBigNumber } from '../../utils/toBigNumber';

export class ExchangeAdapterAlreadyRegisteredError extends ValidationError {
  public name = 'ExchangeAdapterAlreadyRegisteredError';

  constructor(message: string = 'Exchange adapter is already registered.') {
    super(message);
  }
}

export class ExchangeAdaptersRegisteredOutOfBoundsError extends ValidationError {
  public name = 'ExchangeAdaptersRegisteredOutOfBoundsError';

  constructor(
    public readonly numberOfAdapters: number,
    public readonly maxRegisteredAdapters: number,
    message: string = 'Number of registered exchange adapters exceeds the maxium.',
  ) {
    super(message);
  }
}

export class AssetAlreadyRegisteredError extends ValidationError {
  public name = 'AssetAlreadyRegisteredError';

  constructor(message: string = 'Asset is already registered.') {
    super(message);
  }
}

export class AssetsRegisteredOutOfBoundsError extends ValidationError {
  public name = 'AssetsRegisteredOutOfBoundsError';

  constructor(
    public readonly numberOfAsset: number,
    public readonly maxRegisteredAssets: number,
    message: string = 'Number of registered assets exceeds the maximum.',
  ) {
    super(message);
  }
}

export interface VersionInformation {
  exists: boolean;
  name: string;
}

export interface AssetBaseInformation {
  name: string;
  symbol: string;
  url: string;
  standards: number[];
  sigs: string[];
}

export interface AssetCreation extends AssetBaseInformation {
  address: Address;
  reserveMin: BigNumber;
}

export interface AssetInformation extends AssetBaseInformation {
  decimals: number;
  exists: boolean;
}

export interface ExchangeAdapterInformation {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
  sigs: string[];
}

export class Registry extends Contract {
  public static readonly abi = RegistryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, owner: Address) {
    return super.createDeployment<Registry>(environment, bytecode, from, [owner]);
  }

  public async getMaxRegisteredEntities(block?: number) {
    const result = await this.makeCall<string>('MAX_REGISTERED_ENTITIES', undefined, block);
    return toBigNumber(result);
  }

  public getEngine(block?: number) {
    return this.makeCall<Address>('engine', undefined, block);
  }

  public setMlnToken(from: Address, token: Address) {
    return this.createTransaction({ from, method: 'setMlnToken', methodArgs: [token] });
  }

  public getMlnToken(block?: number) {
    return this.makeCall<Address>('mlnToken', undefined, block);
  }

  public getNativeAsset(block?: number) {
    return this.makeCall<Address>('nativeAsset', undefined, block);
  }

  public getEthfinexWrapperRegistry(block?: number) {
    return this.makeCall<Address>('ethfinexWrapperRegistry', undefined, block);
  }

  public getPriceSource(block?: number) {
    return this.makeCall<Address>('priceSource', undefined, block);
  }

  public getRegisteredAssets(block?: number) {
    return this.makeCall<Address[]>('getRegisteredAssets', undefined, block);
  }

  public registerExchangeAdapter(from: Address, args: ExchangeAdapterInformation) {
    const method = 'registerExchangeAdapter';
    const methodArgs = [
      args.exchange,
      args.adapter,
      args.takesCustody,
      args.sigs.map(sig => hexToBytes(utf8ToHex(sig))),
    ];

    const validate = async () => {
      const info = await this.getExchangeInformation(args.adapter);
      if (info.exists) {
        throw new ExchangeAdapterAlreadyRegisteredError();
      }

      const [adapters, max] = await Promise.all([
        this.getRegisteredExchangeAdapters(),
        this.getMaxRegisteredEntities(),
      ]);

      if (max.isLessThanOrEqualTo(adapters.length)) {
        throw new ExchangeAdaptersRegisteredOutOfBoundsError(adapters.length, max.toNumber());
      }
    };

    return this.createTransaction({ from, method, methodArgs, validate });
  }

  public getRegisteredExchangeAdapters(block?: number) {
    return this.makeCall<Address[]>('getRegisteredExchangeAdapters', undefined, block);
  }

  public isExchangeAdapterRegistered(adapter: Address, block?: number) {
    return this.makeCall<boolean>('exchangeAdapterIsRegistered', [adapter], block);
  }

  public getRegisteredVersions(block?: number) {
    return this.makeCall<Address[]>('getRegisteredVersions', undefined, block);
  }

  public registerAsset(from: Address, args: AssetCreation) {
    const method = 'registerAsset';
    const methodArgs = [
      args.address,
      args.name,
      args.symbol,
      args.url,
      args.reserveMin.toString(),
      args.standards,
      args.sigs.map(sig => hexToBytes(utf8ToHex(sig))),
    ];

    const validate = async () => {
      const [assets, max] = await Promise.all([this.getRegisteredAssets(), this.getMaxRegisteredEntities()]);

      if (max.isLessThanOrEqualTo(assets.length)) {
        throw new AssetsRegisteredOutOfBoundsError(assets.length, max.toNumber());
      }

      const info = await this.getAssetInformation(args.address);
      if (info.exists) {
        throw new AssetAlreadyRegisteredError();
      }
    };

    return this.createTransaction({ from, method, methodArgs, validate });
  }

  public getAssetInformation(assetAddress: Address, block?: number) {
    return this.makeCall<AssetInformation>('assetInformation', [assetAddress], block);
  }

  public getExchangeInformation(exAdapterAddress: Address, block?: number) {
    return this.makeCall<{
      exists: boolean;
      exchangeAddress: Address;
      takesCustody: boolean;
      sigs: string[];
    }>('exchangeInformation', [exAdapterAddress], block);
  }

  public getVersionInformation(versionAddress: Address, block?: number) {
    return this.makeCall<VersionInformation>('versionInformation', [versionAddress], block);
  }

  public registerFees(from: Address, feeAddresses: Address[]) {
    const method = 'registerFees';
    const methodArgs = [feeAddresses];
    return this.createTransaction({ from, method, methodArgs });
  }

  public isFeeRegistered(feeAddress: Address, block?: number) {
    return this.makeCall<boolean>('isFeeRegistered', [feeAddress], block);
  }

  public isAssetRegistered(asset: Address, block?: number) {
    return this.makeCall<boolean>('assetIsRegistered', [asset], block);
  }
}