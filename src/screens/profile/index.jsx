import { View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { ImageSelector, Loader } from "../../components";
import { useGetProfileQuery, useUpdateImageProfileMutation } from "../../store/settings/api";

const Profile = () => {
  const localId = useSelector((state) => state.auth.user.localId);
  const [uploadImageProfile, { data, isLoading, error }] = useUpdateImageProfileMutation();
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });
  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage} />
        {isLoading && (
          <Loader />
        )}
      </View>
    </View>
  );
};

export default Profile;