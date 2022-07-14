import * as api from "../../../api/index";
import { useMutation, useQueryClient } from "react-query";

const useEdit = (id) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newData) => api.updateTemplate2Testimonials(id, newData),
    {
      onSuccess: (newData) => {
        queryClient.setQueryData(["template2-testimonials", id], newData);
        if (queryClient.getQueryData("template2-testimonials")) {
          queryClient.setQueryData("template2-testimonials", (old) => {
            return old.map((queryD) => {
              if (queryD.id === id) {
                return newData;
              }
              return queryD;
            });
          });
        } else {
          queryClient.setQueryData("template2-testimonials", newData);
          queryClient.invalidateQueries("template2-testimonials");
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries("template2-testimonials");
      },
    },
  );
};

export default useEdit;
