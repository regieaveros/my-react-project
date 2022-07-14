import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateContent(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["content", id], newData);
      if (queryClient.getQueryData("content")) {
        queryClient.setQueryData("content", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("content", newData);
        queryClient.invalidateQueries("content");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("content");
    },
  });
};

export default useEdit;
