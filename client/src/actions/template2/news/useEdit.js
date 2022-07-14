import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate2News(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template2-news", id], newData);
      if (queryClient.getQueryData("template2-news")) {
        queryClient.setQueryData("template2-news", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template2-news", newData);
        queryClient.invalidateQueries("template2-news");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-news");
    },
  });
};

export default useEdit;
