import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate1Products(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template1-products", id], newData);
      if (queryClient.getQueryData("template1-products")) {
        queryClient.setQueryData("template1-products", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template1-products", newData);
        queryClient.invalidateQueries("template1-products");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-products");
    },
  });
};

export default useEdit;
