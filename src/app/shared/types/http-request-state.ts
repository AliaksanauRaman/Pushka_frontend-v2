// TODO: Unused
export type HttpRequestState<TData = unknown, TError = unknown> =
  | NotMadeHttpRequest
  | LoadingHttpRequest
  | SuccessHttpRequest<TData>
  | FailedHttpRequest<TError>;

abstract class BaseHttpRequest<TData = unknown, TError = unknown> {
  public abstract readonly data: TData;
  public abstract readonly error: TError;

  public checkIsNotMade(): this is NotMadeHttpRequest {
    return false;
  }

  public checkIsLoading(): this is LoadingHttpRequest {
    return false;
  }

  public checkIsSuccess(): this is SuccessHttpRequest<TData> {
    return false;
  }

  public checkIsFailed(): this is FailedHttpRequest<TError> {
    return false;
  }
}

export class NotMadeHttpRequest extends BaseHttpRequest<null, null> {
  public readonly data = null;
  public readonly error = null;
  private readonly _isNotMade = true;

  public override checkIsNotMade(): this is NotMadeHttpRequest {
    return this._isNotMade;
  }
}

export class LoadingHttpRequest extends BaseHttpRequest<null, null> {
  public readonly data = null;
  public readonly error = null;
  private readonly _isLoading = true;

  public override checkIsLoading(): this is LoadingHttpRequest {
    return this._isLoading;
  }
}

export class SuccessHttpRequest<T> extends BaseHttpRequest<T, null> {
  public readonly error: null = null;
  private readonly _isSuccess = true;

  constructor(public readonly data: T) {
    super();
  }

  public override checkIsSuccess(): this is SuccessHttpRequest<T> {
    return this._isSuccess;
  }
}

export class FailedHttpRequest<T> extends BaseHttpRequest<null, T> {
  public readonly data: null = null;
  private readonly _isFailed = true;

  constructor(public readonly error: T) {
    super();
  }

  public override checkIsFailed(): this is FailedHttpRequest<T> {
    return this._isFailed;
  }
}
