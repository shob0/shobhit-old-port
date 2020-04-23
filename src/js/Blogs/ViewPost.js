import React from "react";
import Stub from "../Stub";
import { useParams } from "react-router-dom";

function ViewPost() {
  const { id } = useParams();
  const post = Stub.getPostById(id);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor,
        justo eu euismod elementum, risus lectus malesuada dui, in convallis
        erat neque ac odio. Etiam luctus eget urna nec feugiat. Nunc id congue
        augue, in pulvinar eros. Integer hendrerit sem sagittis lacus molestie,
        eget blandit nisl ultrices. Fusce varius tincidunt lorem in sagittis.
        Aliquam semper malesuada diam eu ultricies. Etiam lacinia sagittis elit
        porta laoreet. Maecenas et velit nisi. Sed ut blandit dolor. Praesent at
        pharetra tortor. Aliquam eget nulla ut lacus egestas suscipit. Fusce
        dictum urna ante, vitae rutrum ex euismod eu. Proin imperdiet
        sollicitudin ornare. Ut pretium dignissim sapien. Nullam auctor augue
        nec fermentum ultrices. Nam in tellus dolor. Nam a felis justo.
        Suspendisse aliquet at neque sed varius. Donec leo sem, iaculis in
        ornare vel, mattis et arcu. Nam nec efficitur felis. Aenean id sem ex.
        Etiam sem nulla, accumsan id turpis ac, eleifend egestas est. Nunc in
        volutpat metus. Mauris vel placerat lorem, nec rhoncus massa. Nunc
        vestibulum neque a auctor congue. Maecenas pulvinar vitae est ut rutrum.
        Praesent pulvinar porttitor ipsum, sed imperdiet nibh accumsan eget. Ut
        dui nibh, vestibulum eu venenatis eget, egestas id dolor. Phasellus
        dapibus semper bibendum. Morbi mattis posuere felis, venenatis
        sollicitudin urna tempor ultricies. Duis quis luctus ipsum. Vivamus
        elementum neque vel dolor porttitor auctor. Quisque sit amet enim quis
        augue egestas pretium. Ut blandit sapien eu lacus convallis venenatis.
        Praesent porta ut quam sit amet consequat. Proin congue risus a diam
        tristique elementum. Suspendisse potenti. Aenean interdum, augue vel
        egestas vehicula, est ipsum aliquet felis, vitae faucibus lacus tellus
        quis nibh.
      </p>
    </div>
  );
}

export default ViewPost;
