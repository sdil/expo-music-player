/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(songs)` | `/(songs)/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/(songs)` | `/(tabs)/(songs)/` | `/(tabs)/artists` | `/(tabs)/artists/` | `/(tabs)/favourites` | `/(tabs)/favourites/` | `/(tabs)/playlists` | `/(tabs)/playlists/` | `/_sitemap` | `/artists` | `/artists/` | `/favourites` | `/favourites/` | `/playlists` | `/playlists/`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
