import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate2Services(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template2-services", id], newData);
      if (queryClient.getQueryData("template2-services")) {
        queryClient.setQueryData("template2-services", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template2-services", newData);
        queryClient.invalidateQueries("template2-services");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-services");
    },
  });
};

export default useEdit;
