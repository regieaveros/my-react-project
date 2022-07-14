import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate1Slider, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template1-slider");
      if (queryClient.getQueryData("template1-slider")) {
        queryClient.setQueryData("template1-slider", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template1-slider", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-slider");
    },
  });
};

export default useCreate;
