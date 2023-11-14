export type SnackBarConfig = Readonly<{
  showClose: boolean;
  actionLabel: string;
}>;

const DEFAULT_SNACK_BAR_CONFIG: SnackBarConfig = {
  showClose: true,
  actionLabel: '',
};

export class SnackBarData {
  public readonly config: SnackBarConfig;

  constructor(
    public readonly message: string,
    config?: Partial<SnackBarConfig>
  ) {
    this.config = {
      ...DEFAULT_SNACK_BAR_CONFIG,
      ...config,
    };
  }
}
