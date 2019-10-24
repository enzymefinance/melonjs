import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { ManagementFeeAbi } from '../abis/ManagementFee';
import BigNumber from 'bignumber.js';

export class ManagementFee extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(ManagementFeeAbi, address));
  }

  /**
   * Gets the address of the management fee contract.
   *
   * @param address The address of the management fee contract
   * @param block The block number to execute the call on.
   */
  public async getManagementFeeRate(address: Address, block?: number) {
    const result = await this.makeCall<Address>('managementFeeRate', [address], block);
    return new BigNumber(`${result}`);
  }
}
