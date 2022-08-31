import { Menu } from '@headlessui/react';
import '../styles/Header.module.css';

const Header: React.FC<{}> = () => {
	return (
		<Menu>
			<header className="p-2 shadow-sm w-full bg-white dark:bg-neutral-800">
				<div className="mx-auto max-w-6xl px-4s flex gap-1 justify-between">
					<h1 className="text-2xl font-black trans">Vwoop Industries</h1>
					<div className="md:hidden">
						<Menu.Button>More</Menu.Button>
					</div>
				</div>
			</header>
			<nav>
				<Menu.Items className="m-2 flex flex-col gap-2 shadow-lg rounded-md bg-white dark:bg-neutral-800 p-3 transition-x">
					<Menu.Item>
						<a
							className="hover:text-[#d2cfd1] hover:font-bold cursor-pointer transition-all"
							href="/account-settings"
						>
							Account settings
						</a>
					</Menu.Item>
					<Menu.Item>
						<a
							className="hover:text-[#d2cfd1] hover:font-bold cursor-pointer transition-all"
							href="/account-settings"
						>
							Documentation
						</a>
					</Menu.Item>
					<Menu.Item disabled>
						<span className="opacity-75">Invite a friend (coming soon!)</span>
					</Menu.Item>
				</Menu.Items>
			</nav>
		</Menu>
	);
};

export default Header;
