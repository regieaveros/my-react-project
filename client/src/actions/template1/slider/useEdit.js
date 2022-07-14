import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate1Slider(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template1-slider", id], newData);
      if (queryClient.getQueryData("template1-slider")) {
        queryClient.setQueryData("template1-slider", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template1-slider", newData);
        queryClient.invalidateQueries("template1-slider");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-slider");
    },
  });
};

export default useEdit;
