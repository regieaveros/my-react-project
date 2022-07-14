import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newData) => api.updateTemplate2BestServices(id, newData),
    {
      onSuccess: (newData) => {
        queryClient.setQueryData(["template2-best-services", id], newData);
        if (queryClient.getQueryData("template2-best-services")) {
          queryClient.setQueryData("template2-best-services", (old) => {
            return old.map((queryD) => {
              if (queryD.id === id) {
                return newData;
              }
              return queryD;
            });
          });
        } else {
          queryClient.setQueryData("template2-best-services", newData);
          queryClient.invalidateQueries("template2-best-services");
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries("template2-best-services");
      },
    },
  );
};

export default useEdit;
