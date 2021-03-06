import { DeploymentOutput } from '../Deployment';

export enum ExchangeIdentifier {
  'MelonEngine' = 'MelonEngine',
  'KyberNetwork' = 'KyberNetwork',
  'Uniswap' = 'Uniswap',
  'OasisDex' = 'OasisDex',
  'ZeroExV2' = 'ZeroExV2',
  'ZeroExV3' = 'ZeroExV3',
}

export interface ExchangeDefinition {
  id: ExchangeIdentifier | string;
  name: string;
  exchange: string;
  adapter: string;
  historic: boolean;
}

export function availableExchanges(deployment: DeploymentOutput): ExchangeDefinition[] {
  const exchanges = [
    deployment.melon && {
      name: 'Melon Engine (v2)',
      id: ExchangeIdentifier.MelonEngine,
      exchange: deployment.melon.addr.Engine,
      adapter: deployment.melon.addr.EngineAdapter,
      historic: false,
    },
    deployment.kyber && {
      name: 'Kyber Network',
      id: ExchangeIdentifier.KyberNetwork,
      adapter: deployment.melon.addr.KyberAdapter,
      exchange: deployment.kyber.addr.KyberNetworkProxy,
      historic: false,
    },
    deployment.uniswap && {
      name: 'Uniswap',
      id: ExchangeIdentifier.Uniswap,
      adapter: deployment.melon.addr.UniswapAdapter,
      exchange: deployment.uniswap.addr.UniswapFactory,
      historic: false,
    },
    deployment.oasis && {
      name: 'OasisDEX',
      id: ExchangeIdentifier.OasisDex,
      adapter: deployment.melon.addr.OasisDexAdapter,
      exchange: deployment.oasis.addr.OasisDexExchange,
      historic: false,
    },
    deployment.zeroExV2 && {
      name: '0x (v2.1)',
      id: ExchangeIdentifier.ZeroExV2,
      adapter: deployment.melon.addr.ZeroExV2Adapter,
      exchange: deployment.zeroExV2.addr.ZeroExV2Exchange,
      historic: false,
    },
    deployment.zeroExV3 && {
      name: '0x (v3)',
      id: ExchangeIdentifier.ZeroExV3,
      adapter: deployment.melon.addr.ZeroExV3Adapter,
      exchange: deployment.zeroExV3.addr.ZeroExV3Exchange,
      historic: false,
    },
  ];

  return [...exchanges].filter((value) => !!(value && value.exchange && value.adapter));
}
