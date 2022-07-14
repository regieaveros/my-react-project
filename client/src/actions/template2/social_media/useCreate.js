import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate2SocialMedia, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template2-social-media");
      if (queryClient.getQueryData("template2-social-media")) {
        queryClient.setQueryData("template2-social-media", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template2-social-media", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-social-media");
    },
  });
};

export default useCreate;
