import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation((newData) => api.updateTemplate2SocialMedia(id, newData), {
    onSuccess: (newData) => {
      queryClient.setQueryData(["template2-social-media", id], newData);
      if (queryClient.getQueryData("template2-social-media")) {
        queryClient.setQueryData("template2-social-media", (old) => {
          return old.map((queryD) => {
            if (queryD.id === id) {
              return newData;
            }
            return queryD;
          });
        });
      } else {
        queryClient.setQueryData("template2-social-media", newData);
        queryClient.invalidateQueries("template2-social-media");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries("template2-social-media");
    },
  });
};

export default useEdit;
