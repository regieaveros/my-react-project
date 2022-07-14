import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newData) => api.updateTemplate2Professionals(id, newData),
    {
      onSuccess: (newData) => {
        queryClient.setQueryData(["template2-professionals", id], newData);
        if (queryClient.getQueryData("template2-professionals")) {
          queryClient.setQueryData("template2-professionals", (old) => {
            return old.map((queryD) => {
              if (queryD.id === id) {
                return newData;
              }
              return queryD;
            });
          });
        } else {
          queryClient.setQueryData("template2-professionals", newData);
          queryClient.invalidateQueries("template2-professionals");
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries("template2-professionals");
      },
    },
  );
};

export default useEdit;
