import { createServer, Model, RestSerializer } from "miragejs";
import { videoList } from "./videoList";

export const setupMockServer = () => {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      video: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.resource("videos");
    },

    seeds(server) {
      videoList.forEach((item) => {
        server.create("video", item);
      });
    }
  });
};
