import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const createdAtTime = createdAt.getTime();

  // Check if createdAt is a valid date
  if (isNaN(createdAtTime)) {
    return "Invalid date";
  }

  const diff = (now.getTime() - createdAtTime) / 1000;

  const years = Math.floor(diff / 60 / 60 / 24 / 365);
  const months = Math.floor(diff / 60 / 60 / 24 / 30);
  const days = Math.floor(diff / 60 / 60 / 24);
  const hours = Math.floor(diff / 60 / 60);
  const minutes = Math.floor(diff / 60);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diff > 0) {
    return `${Math.floor(diff)} second${Math.floor(diff) !== 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
};

export const formatAndDevideNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};
