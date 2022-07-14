import * as api from "../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateImage(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["image", id], newData);
      if (queryClient.getQueryData("image")) {
        queryClient.setQueryData("image", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("image", newData);
        queryClient.invalidateQueries("image");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("image");
    },
  });
};

export default useEdit;
