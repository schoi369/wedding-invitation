#!/usr/bin/env python3
import argparse
from pathlib import Path

from PIL import Image, ImageOps


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
RESIZED_SUFFIX = "_resized"


def resized_path(path: Path) -> Path:
    return path.with_name(f"{path.stem}{RESIZED_SUFFIX}{path.suffix}")


def resize_image(path: Path, width: int, overwrite: bool) -> bool:
    output_path = resized_path(path)

    if path.stem.endswith(RESIZED_SUFFIX):
        print(f"skip already resized: {path}")
        return False

    if output_path.exists() and not overwrite:
        print(f"skip existing output: {output_path}")
        return False

    with Image.open(path) as image:
        image = ImageOps.exif_transpose(image)
        original_width, original_height = image.size

        if original_width == width:
            resized = image.copy()
        else:
            height = round(original_height * (width / original_width))
            resized = image.resize((width, height), Image.Resampling.LANCZOS)

        save_kwargs = {}
        suffix = path.suffix.lower()

        if suffix in {".jpg", ".jpeg"}:
            if resized.mode not in {"RGB", "L"}:
                resized = resized.convert("RGB")
            save_kwargs = {
                "quality": 85,
                "optimize": True,
                "progressive": True,
            }
        elif suffix == ".png":
            save_kwargs = {"optimize": True}
        elif suffix == ".webp":
            save_kwargs = {"quality": 85, "method": 6}

        resized.save(output_path, **save_kwargs)

    print(f"created: {output_path}")
    return True


def iter_images(directory: Path, recursive: bool):
    pattern = "**/*" if recursive else "*"
    for path in sorted(directory.glob(pattern)):
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS:
            yield path


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Resize every image in a folder to a fixed width.",
    )
    parser.add_argument(
        "directory",
        nargs="?",
        default=".",
        help="Folder containing images. Defaults to current directory.",
    )
    parser.add_argument(
        "--width",
        type=int,
        default=1000,
        help="Target image width in pixels. Defaults to 1000.",
    )
    parser.add_argument(
        "--recursive",
        action="store_true",
        help="Also resize images in subfolders.",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite existing *_resized files.",
    )
    args = parser.parse_args()

    directory = Path(args.directory).expanduser().resolve()
    if not directory.is_dir():
        raise SystemExit(f"Not a directory: {directory}")
    if args.width <= 0:
        raise SystemExit("--width must be greater than 0")

    created = 0
    for image_path in iter_images(directory, args.recursive):
        created += int(resize_image(image_path, args.width, args.overwrite))

    print(f"done: {created} file(s) created")


if __name__ == "__main__":
    main()
