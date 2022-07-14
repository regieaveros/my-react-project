import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate1SocialMedia(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template1-socialmedia", id], newData);
      if (queryClient.getQueryData("template1-socialmedia")) {
        queryClient.setQueryData("template1-socialmedia", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template1-socialmedia", newData);
        queryClient.invalidateQueries("template1-socialmedia");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template1-socialmedia");
    },
  });
};

export default useEdit;
