import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateUserControl(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["usercontrol", id], newData);
      if (queryClient.getQueryData("usercontrol")) {
        queryClient.setQueryData("usercontrol", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("usercontrol", newData);
        queryClient.invalidateQueries("usercontrol");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("usercontrol");
    },
  });
};

export default useEdit;
