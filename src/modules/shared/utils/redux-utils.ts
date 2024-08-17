import { ThunkState } from '@/modules/shared/types/redux-utils-types';

export const handlePending = (state: ThunkState) => {
  state.isLoading = true;
  state.isError = false;
  state.errorMessage = '';
};

export const handleRejected = ({
  state,
  errorMessage,
  defaultErrorMessage = 'An error occurred',
}: {
  state: ThunkState;
  errorMessage?: string;
  defaultErrorMessage?: string;
}) => {
  state.isLoading = false;
  state.isError = true;
  state.errorMessage = errorMessage || defaultErrorMessage;
};

export const handleFulfilled = (state: ThunkState) => {
  state.isLoading = false;
  state.isError = false;
  state.errorMessage = '';
};
