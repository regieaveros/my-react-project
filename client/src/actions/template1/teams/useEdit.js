import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate1Teams(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template1-team", id], newData);
      if (queryClient.getQueryData("template1-team")) {
        queryClient.setQueryData("template1-team", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template1-team", newData);
        queryClient.invalidateQueries("template1-team");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-team");
    },
  });
};

export default useEdit;
