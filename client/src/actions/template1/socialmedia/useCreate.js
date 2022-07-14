import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate1SocialMedia, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template1-socialmedia");
      if (queryClient.getQueryData("template1-socialmedia")) {
        queryClient.setQueryData("template1-socialmedia", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template1-socialmedia", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-socialmedia");
    },
  });
};

export default useCreate;
