{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/a7ecde854aee5c4c7cd6177f54a99d2c1ff28a31.tar.gz") {} }:

with pkgs;
let
  inherit (lib) optional optionals;
in
 pkgs.mkShell {
    # nativeBuildInputs is usually what you want -- tools you need to run
    # elixir v1.12.3
    # postgres 13.4
    nativeBuildInputs = [ pkgs.nodejs-16_x pkgs.nodePackages.typescript pkgs.nodePackages.typescript-language-server ]
    ++ optional stdenv.isLinux inotify-tools # For file_system on Linux.
    ++ optionals stdenv.isDarwin (with darwin.apple_sdk.frameworks; [
      # For file_system on macOS.
      CoreFoundation
      CoreServices
    ]);
}
