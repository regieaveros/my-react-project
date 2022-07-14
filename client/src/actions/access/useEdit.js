import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateAccess(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["access", id], newData);
      if (queryClient.getQueryData("access")) {
        queryClient.setQueryData("access", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("access", newData);
        queryClient.invalidateQueries("access");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("access");
    },
  });
};

export default useEdit;
