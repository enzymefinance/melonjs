import { Address } from '../../../Address';
import { ValidationError } from '../../../errors/ValidationError';
import BigNumber from 'bignumber.js';

export class ExchangeNotRegisteredWithFundError extends ValidationError {
  public readonly name = 'ExchangeNotRegisteredWithFundError';
  constructor(public readonly kyberAddress: Address, message: string = 'Exchange is not registered for this fund.') {
    super(message);
  }
}

export class FundIsShutDownError extends ValidationError {
  public readonly name = 'FundIsShutDownError';
  constructor(public readonly fund: Address, message: string = 'Fund is shutdown.') {
    super(message);
  }
}

export class AdapterMethodNotAllowedError extends ValidationError {
  public readonly name = 'AdapterMethodNotAllowedError';

  constructor(
    public readonly adapter: Address,
    public readonly signature: string,
    message: string = 'Adapter Method is not allowed.',
  ) {
    super(message);
  }
}

export class InsufficientBalanceError extends ValidationError {
  public readonly name = 'InsufficientBalanceError';

  constructor(
    public readonly requested: BigNumber,
    public readonly actual: BigNumber,
    message: string = 'Insufficient funds for this trade.',
  ) {
    super(message);
  }
}

export class InvalidExchangeIndexError extends ValidationError {
  public readonly name = 'InvalidExchangeIndexError';

  constructor(public readonly index: number, message: string = 'Invalid exchange index.') {
    super(message);
  }
}

export class SenderIsNotFundManagerError extends ValidationError {
  public readonly name = 'SenderIsNotFundManagerError';

  constructor(public readonly sender: Address, message: string = 'Only the manager can call this function.') {
    super(message);
  }
}

export class PreTradePolicyValidationError extends ValidationError {
  public readonly name = 'PreTradePolicyValidationError';

  constructor(
    public readonly signature: string,
    message: string = 'Trade cannot be executed because risk management policies or compliance policies would be violated.',
  ) {
    super(message);
  }
}

export class AssetAlreadyHasOpenMakeOrderError extends ValidationError {
  public readonly name = 'AssetAlreadyHasOpenMakeOrderError';

  constructor(public readonly asset: Address, message: string = 'There is already an open make order for this asset.') {
    super(message);
  }
}
