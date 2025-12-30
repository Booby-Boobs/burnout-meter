fn main() {
    let capabilities = if cfg!(target_os = "macos") {
        vec!["default", "macos-specific-permissions"]
    } else {
        vec!["default"]
    };

    tauri_build::try_build(tauri_build::Attributes::new().capabilities(capabilities))
        .expect("failed to run tauri-build");
}
