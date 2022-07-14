import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newData) => api.updateTemplate2WorkShowcase(id, newData),
    {
      onSuccess: (newData) => {
        queryClient.setQueryData(["template2-work-showcase", id], newData);
        if (queryClient.getQueryData("template2-work-showcase")) {
          queryClient.setQueryData("template2-work-showcase", (old) => {
            return old.map((queryD) => {
              if (queryD.id === id) {
                return newData;
              }
              return queryD;
            });
          });
        } else {
          queryClient.setQueryData("template2-work-showcase", newData);
          queryClient.invalidateQueries("template2-work-showcase");
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries("template2-work-showcase");
      },
    },
  );
};

export default useEdit;
