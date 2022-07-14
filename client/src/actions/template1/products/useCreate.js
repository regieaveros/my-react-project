import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation(api.createTemplate1Products, {
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData("template1-products");
      if (queryClient.getQueryData("template1-products")) {
        queryClient.setQueryData("template1-products", (old) => [
          ...old,
          newData,
        ]);
      }
      return () => queryClient.setQueryData("template1-products", oldData);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-products");
    },
  });
};

export default useCreate;
