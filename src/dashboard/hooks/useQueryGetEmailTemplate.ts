import { EMAIL_TEMPLATE_KEY } from '../../constants/azure-function-keys';
import { useRequestProcessor } from '../../hooks/useRequestProcessor';
import axiosClient from '../../utils/axios';

export const useQueryGetEmailTemplate = (tempateId: string) => {
  const { query } = useRequestProcessor();
  return query(
    'template',
    () =>
      axiosClient
        .get(
          `/upload-email-template?code=${EMAIL_TEMPLATE_KEY}&id=${tempateId}`
        )
        .then((res) => res.data),
    {
      enabled: true,
    }
  );
};
