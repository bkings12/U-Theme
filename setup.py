from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in u_theme/__init__.py
from u_theme import __version__ as version

setup(
	name="u_theme",
	version=version,
	description="u",
	author="Bryan",
	author_email="nwachira@unganishanetworks.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
