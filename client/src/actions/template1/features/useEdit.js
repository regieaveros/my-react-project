import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate1Features(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template1-feature", id], newData);
      if (queryClient.getQueryData("template1-feature")) {
        queryClient.setQueryData("template1-feature", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template1-feature", newData);
        queryClient.invalidateQueries("template1-feature");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-feature");
    },
  });
};

export default useEdit;
