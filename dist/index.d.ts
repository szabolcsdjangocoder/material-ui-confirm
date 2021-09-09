import * as React from 'react';
import { DialogProps } from '@mui/material/Dialog';
import { ButtonProps } from '@mui/material/Button';

export interface ConfirmOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  confirmationText?: React.ReactNode;
  cancellationText?: React.ReactNode;
  dialogProps?: DialogProps;
  confirmationButtonProps?: ButtonProps;
  cancellationButtonProps?: ButtonProps;
}

export interface ConfirmProviderProps {
  defaultOptions?: ConfirmOptions;
}

export const ConfirmProvider: React.ComponentType<ConfirmProviderProps>;

export const useConfirm: () => (options?: ConfirmOptions) => Promise<void>;
