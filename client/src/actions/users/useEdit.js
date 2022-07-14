import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateUser(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["user", id], newData);
      if (queryClient.getQueryData("user")) {
        queryClient.setQueryData("user", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("user", newData);
        queryClient.invalidateQueries("user");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("user");
    },
  });
};

export default useEdit;
