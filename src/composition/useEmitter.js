import mitt from "mitt";

export default function () {
  const emitter = mitt();

  return {
    emitter,
  };
}
