export interface IGeneralAction {
  action?: string | undefined;
  method?: 'get' | 'post' | 'patch' | 'delete';
  data?: object | undefined;
  requestIndex?: number | null | undefined;
  params?: object | string | undefined;
  actionType?: string | undefined;
  api?: string;
}
