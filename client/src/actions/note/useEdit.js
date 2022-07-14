import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateNote(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["note", id], newData);
      if (queryClient.getQueryData("note")) {
        queryClient.setQueryData("note", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("note", newData);
        queryClient.invalidateQueries("note");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("note");
    },
  });
};

export default useEdit;
