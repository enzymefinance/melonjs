import { toUtf8 } from 'web3-utils';
import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export const getFundName = async (config: BasicCallConfig, hubAddress: string) => {
  const result = await makeCall<string>({
    ...config,
    address: hubAddress,
    contract: 'Hub',
    method: 'name',
  });

  return toUtf8(result);
};