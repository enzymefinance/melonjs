import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class DSAuthority extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `DSAuthority` contract call for the `canCall` function.
   *
   * @contract DSAuthority
   * @signature function canCall(address,address,bytes4) view returns (bool)
   */
  canCall: (
    src: string,
    dst: string,
    sig: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  static abi: string[] = ['function canCall(address src, address dst, bytes4 sig) view returns (bool)'];
}