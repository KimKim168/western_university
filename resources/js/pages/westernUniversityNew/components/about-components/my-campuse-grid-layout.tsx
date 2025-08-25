"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import { usePage } from "@inertiajs/react";

export function MyCampuseGridLayout() {
  const { campuses } = usePage().props;
  return <ParallaxScroll images={campuses?.children} />;
}
