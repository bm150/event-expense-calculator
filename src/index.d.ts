export interface Friend {
  id: string;
  statusMessage: string;
  image: string | null;
  name: string;
}
export interface FriendShip extends Friend {
  myFreinds: Friend[];
}
export type FriendList = Friend[];

export type roomStatusType = "wait" | "start" | "end";

// Flag 코드 컬럼
// A 학생, B는 선생

// A 타입을 받았다 -> 클라이언트에서는 Typescript로 어떻게 처리를 하는게 좋을까
// 마지막 Notificate 의 타입에 따라서 화면에 표시되어야 할게 달라짐.

export enum GatheringNotificationEnum {
  Attendance = "Meeting Attendance",
  AttendanceCancellation = "Meeting Attendance Cancellation",
  Ended = "Meeting Ended",
  LocationChanged = "Meeting Location Changed",
  Created = "Meeting Created",
  OneHourReminder = "Reminder: 1 Hour Before Meeting",
  LocationMoved = "Meeting Location Moved",
  AutomaticallyEnded = "Meeting Automatically Ended",
}
export interface Gathering {
  roomId: string;
  roomStatus: roomStatusType;
  image: string | null;
  roomName: string;
  participants: FriendList | [];
  lastNotificate: GatheringNotificationEnum;
}
export type GatheringList = Gathering[];

export type HeaderLayoutStateType = {
  readonly title?: string;
  readonly backButtonUrlLink?: string;
};