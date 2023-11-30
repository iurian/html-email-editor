import { EMAIL_TEMPLATE_KEY } from '../../constants/azure-function-keys';
import { useRequestProcessor } from '../../hooks/useRequestProcessor';
import axiosClient from '../../utils/axios';

export const useUpdateTemplate = () => {
  const { mutate } = useRequestProcessor();

  const updateTemplate = (tempateId: string, jsonString: string) => {
    return mutate(
      'template',
      () =>
        axiosClient
          .put(
            `/upload-email-template?code=${EMAIL_TEMPLATE_KEY}&id=${tempateId}`,
            JSON.stringify(jsonString)
          )
          .then((res) => res.data),
      {
        enabled: true,
      }
    );
  };

  return { updateTemplate };
};
