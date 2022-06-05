export interface rolesInterface {
  Role: String;
  Duration: String;
  tasks: String[];
}
export interface btnProps {
  href: string;
  text: string;
}
export interface headerProps {
  showMenu: any;
  setShowMenu: any;
}

export interface Props {
  setEmailRes: React.Dispatch<React.SetStateAction<string>>;
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
}
