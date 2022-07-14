import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate2Testimonials, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template2-testimonials");
      if (queryClient.getQueryData("template2-testimonials")) {
        queryClient.setQueryData("template2-testimonials", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template2-testimonials", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-testimonials");
    },
  });
};

export default useCreate;
