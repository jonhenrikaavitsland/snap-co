import { propertiesToVariables } from "../localStorage/getValue/propertiesToVariables.mjs";
import { personalProfileInfo } from "../ui/editProfile/profileInfo.mjs";
import { getObject } from "../localStorage/getValue/getObject.mjs";
const object = getObject();
const { name, bio, imageSrc } = propertiesToVariables(object);

personalProfileInfo(name, bio, imageSrc);
