import cowsay from "cowsay-browser";
import { Layout } from "../../../components/Layout";

export default () => (
  <Layout title="COWSAY2 !!">
    <pre>{cowsay.say({ text: "cowsay2 !!" })}</pre>
  </Layout>
);
