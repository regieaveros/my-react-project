import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateMessage(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["message", id], newData);
      if (queryClient.getQueryData("message")) {
        queryClient.setQueryData("message", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("message", newData);
        queryClient.invalidateQueries("message");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("message");
    },
  });
};

export default useEdit;
