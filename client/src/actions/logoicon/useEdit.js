import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateLogoIcon(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["logoicon", id], newData);
      if (queryClient.getQueryData("logoicon")) {
        queryClient.setQueryData("logoicon", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("logoicon", newData);
        queryClient.invalidateQueries("logoicon");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("logoicon");
    },
  });
};

export default useEdit;
